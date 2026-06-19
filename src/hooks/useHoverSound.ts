import { useCallback, useRef } from 'react';

export function useHoverSound() {
  const audioContext = useRef<AudioContext | null>(null);

  const playHoverSound = useCallback(() => {
    try {
      if (!audioContext.current) {
        const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
        audioContext.current = new AudioContext();
      }
      
      const ctx = audioContext.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.04);

      gain.gain.setValueAtTime(0, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.015, ctx.currentTime + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.04);
    } catch (e) {
      console.warn("Audio not supported or disabled", e);
    }
  }, []);

  return playHoverSound;
}
