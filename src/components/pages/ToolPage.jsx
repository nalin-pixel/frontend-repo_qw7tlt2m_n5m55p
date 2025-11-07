import { useEffect, useRef, useState } from 'react';
import { Upload, PlayCircle, Download, Settings } from 'lucide-react';

const RESOLUTIONS = {
  '1080P': { w: 1920, h: 1080 },
  '2K': { w: 2560, h: 1440 },
  '4K': { w: 3840, h: 2160 },
};

export default function ToolPage({ title, desc }) {
  const [file, setFile] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [resultUrl, setResultUrl] = useState('');
  const [resultName, setResultName] = useState('result');
  const [resolution, setResolution] = useState('1080P');
  const [imgFormat, setImgFormat] = useState('image/webp');
  const [imgQuality, setImgQuality] = useState(0.9);
  const [mode, setMode] = useState(''); // 'image' | 'video'

  const videoRef = useRef(null);

  useEffect(() => {
    if (!file) return;
    const type = file.type;
    if (type.startsWith('image/')) setMode('image');
    else if (type.startsWith('video/')) setMode('video');
    else setMode('');

    const base = file.name.replace(/\.[^.]+$/, '');
    setResultName(base);

    // Clear previous output when file changes
    if (resultUrl) URL.revokeObjectURL(resultUrl);
    setResultUrl('');
  }, [file]);

  useEffect(() => {
    // Changing resolution invalidates prior output
    if (resultUrl) {
      URL.revokeObjectURL(resultUrl);
      setResultUrl('');
    }
  }, [resolution]);

  const onFile = (e) => {
    const f = e.target.files?.[0];
    if (f) setFile(f);
  };

  const targetSize = RESOLUTIONS[resolution];

  const processImage = async () => {
    const arrayBuffer = await file.arrayBuffer();
    const blob = new Blob([arrayBuffer]);
    const imgBitmap = await createImageBitmap(blob);

    // Compute aspect-fit into target size
    const { w: tw, h: th } = targetSize;
    const iw = imgBitmap.width;
    const ih = imgBitmap.height;
    const ir = iw / ih;
    const tr = tw / th;

    let dw, dh; // destination drawing size
    if (ir > tr) {
      // image is wider -> match width
      dw = tw;
      dh = Math.round(tw / ir);
    } else {
      // match height
      dh = th;
      dw = Math.round(th * ir);
    }

    const off = new OffscreenCanvas(tw, th);
    const ctx = off.getContext('2d');
    // Fill background black for video-like look (helps PNG/JPEG background); for WebP transparent is fine
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, tw, th);
    const dx = Math.round((tw - dw) / 2);
    const dy = Math.round((th - dh) / 2);
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(imgBitmap, dx, dy, dw, dh);

    const outType = imgFormat;
    const blobOut = await off.convertToBlob({ type: outType, quality: imgQuality });
    return blobOut;
  };

  const processVideo = async () => {
    const { w: tw, h: th } = targetSize;
    const fileUrl = URL.createObjectURL(file);
    const video = document.createElement('video');
    video.src = fileUrl;
    video.muted = true;
    video.crossOrigin = 'anonymous';

    await new Promise((resolve, reject) => {
      video.onloadedmetadata = () => resolve();
      video.onerror = () => reject(new Error('Failed to load video'));
    });

    const vw = video.videoWidth;
    const vh = video.videoHeight;
    const vr = vw / vh;
    const tr = tw / th;

    let dw, dh;
    if (vr > tr) {
      dw = tw;
      dh = Math.round(tw / vr);
    } else {
      dh = th;
      dw = Math.round(th * vr);
    }
    const dx = Math.round((tw - dw) / 2);
    const dy = Math.round((th - dh) / 2);

    const canvas = document.createElement('canvas');
    canvas.width = tw;
    canvas.height = th;
    const ctx = canvas.getContext('2d');

    // Capture stream from canvas at 30fps
    const fps = 30;
    const stream = canvas.captureStream(fps);
    const mime = 'video/webm;codecs=vp9';
    const supports = MediaRecorder.isTypeSupported(mime) ? mime : 'video/webm';
    const recorder = new MediaRecorder(stream, { mimeType: supports, videoBitsPerSecond: 6_000_000 });
    const chunks = [];
    recorder.ondataavailable = (e) => {
      if (e.data && e.data.size > 0) chunks.push(e.data);
    };

    const done = new Promise((resolve) => {
      recorder.onstop = () => resolve();
    });

    // Draw loop using rAF or requestVideoFrameCallback
    let drawHandle;
    const drawFrame = () => {
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, tw, th);
      ctx.drawImage(video, 0, 0, vw, vh, dx, dy, dw, dh);
      drawHandle = requestAnimationFrame(drawFrame);
    };

    recorder.start(100);
    video.currentTime = 0;
    await video.play();
    drawHandle = requestAnimationFrame(drawFrame);

    await new Promise((resolve) => {
      video.onended = () => resolve();
    });

    cancelAnimationFrame(drawHandle);
    recorder.stop();
    await done;

    URL.revokeObjectURL(fileUrl);
    return new Blob(chunks, { type: supports });
  };

  const simulateProcess = async () => {
    if (!file) return;
    setProcessing(true);
    try {
      let outBlob;
      if (mode === 'image') {
        outBlob = await processImage();
      } else if (mode === 'video') {
        outBlob = await processVideo();
      } else {
        // Fallback: no processing, just return original
        outBlob = file;
      }
      if (resultUrl) URL.revokeObjectURL(resultUrl);
      const url = URL.createObjectURL(outBlob);
      setResultUrl(url);
    } catch (err) {
      console.error(err);
      alert('Processing failed. Please try a different file.');
    } finally {
      setProcessing(false);
    }
  };

  return (
    <section className="py-14">
      <div className="mx-auto max-w-4xl px-6">
        <h1 className="text-2xl font-bold md:text-3xl">{title}</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">{desc}</p>

        <div className="mt-6 rounded-2xl border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-white/5">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <label className="flex-1 cursor-pointer items-center justify-center gap-3 rounded-xl border-2 border-dashed border-black/20 p-6 text-gray-700 hover:bg-black/5 dark:border-white/20 dark:text-gray-300 dark:hover:bg-white/10 md:flex">
              <input type="file" onChange={onFile} className="hidden" accept="image/*,video/*,.mp4,.mov,.webm,.mkv" />
              <div className="flex items-center gap-3">
                <Upload />
                <span>Drop a file here or click to upload</span>
              </div>
            </label>
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 rounded-lg border border-black/10 bg-white px-3 py-2 text-sm dark:border-white/10 dark:bg-white/10">
                <Settings size={16} />
                <span className="opacity-70">Resolution</span>
                <select value={resolution} onChange={(e) => setResolution(e.target.value)} className="bg-transparent pl-1 outline-none">
                  {Object.keys(RESOLUTIONS).map((k) => (
                    <option key={k} value={k}>{k}</option>
                  ))}
                </select>
              </div>
              {mode === 'image' && (
                <div className="flex items-center gap-2 rounded-lg border border-black/10 bg-white px-3 py-2 text-sm dark:border-white/10 dark:bg-white/10">
                  <span className="opacity-70">Format</span>
                  <select value={imgFormat} onChange={(e) => setImgFormat(e.target.value)} className="bg-transparent pl-1 outline-none">
                    <option value="image/webp">WEBP</option>
                    <option value="image/jpeg">JPG</option>
                    <option value="image/png">PNG</option>
                  </select>
                  <span className="opacity-70 pl-3">Quality</span>
                  <input type="range" min={0.5} max={1} step={0.05} value={imgQuality} onChange={(e) => setImgQuality(parseFloat(e.target.value))} />
                </div>
              )}
            </div>
          </div>

          {file && (
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="rounded-lg bg-black/5 p-4 text-sm dark:bg-white/10">
                <p className="font-medium">Selected</p>
                <p className="truncate">{file.name} • {(file.size / 1024 / 1024).toFixed(2)} MB</p>
                <p className="mt-1 text-xs opacity-70">Detected: {mode || 'unknown'} • Target: {RESOLUTIONS[resolution].w}×{RESOLUTIONS[resolution].h}</p>
              </div>
              <div className="flex items-center gap-3">
                <button onClick={simulateProcess} disabled={!file || processing} className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-sky-500 to-indigo-600 px-5 py-2 text-white disabled:opacity-50">
                  <PlayCircle size={18} /> {processing ? 'Processing…' : 'Process'}
                </button>
                {resultUrl && (
                  <a
                    href={resultUrl}
                    download={`${resultName}-${resolution}${mode === 'image' ? (imgFormat === 'image/png' ? '.png' : imgFormat === 'image/jpeg' ? '.jpg' : '.webp') : '.webm'}`}
                    className="inline-flex items-center gap-2 rounded-lg border border-black/10 bg-white px-5 py-2 dark:border-white/10 dark:bg-white/10 dark:text-white"
                  >
                    <Download size={18} /> Download {resolution}
                  </a>
                )}
              </div>
            </div>
          )}

          {resultUrl && (
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-xl overflow-hidden border border-black/10 dark:border-white/10">
                {mode === 'image' ? (
                  <img src={resultUrl} alt="Result preview" className="w-full h-auto" />
                ) : (
                  <video src={resultUrl} controls className="w-full" />
                )}
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 dark:border-white/10 dark:bg-white/5">
                <h3 className="font-semibold">How it works</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Processing runs in your browser for privacy. Images are rescaled on a high-quality canvas. Videos are redrawn frame‑by‑frame to a {resolution} canvas and recorded to WebM.
                </p>
                <ul className="mt-3 list-disc pl-5 text-sm text-gray-600 dark:text-gray-400">
                  <li>Choose 1080P, 2K, or 4K output before processing.</li>
                  <li>Image export supports WEBP/JPG/PNG with adjustable quality.</li>
                  <li>Video export uses WebM for wide compatibility.</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-black/10 bg-white p-4 dark:border-white/10 dark:bg-white/5">
            <h3 className="font-semibold">Tips</h3>
            <ul className="mt-2 list-disc pl-5 text-sm text-gray-600 dark:text-gray-400">
              <li>Prefer modern formats like WebP/AVIF for web delivery.</li>
              <li>Resize to the exact display size to save bandwidth.</li>
              <li>Keep a backup of originals before processing.</li>
            </ul>
          </div>
          <div className="rounded-xl border border-black/10 bg-white p-4 dark:border-white/10 dark:bg-white/5">
            <h3 className="font-semibold">Notes</h3>
            <ul className="mt-2 list-disc pl-5 text-sm text-gray-600 dark:text-gray-400">
              <li>Video processing happens in-browser; very long clips may be slow.</li>
              <li>If your browser doesn’t support VP9, it falls back to WebM default.</li>
              <li>For professional exports and codecs, we’ll add server processing next.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
