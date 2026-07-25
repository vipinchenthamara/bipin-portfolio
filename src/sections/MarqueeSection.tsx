import type { CSSProperties } from 'react';
import { marqueeRowOne, marqueeRowTwo, type MarqueeTileData } from '../data';

// Each tile is 420px wide with a 12px (gap-3) gap, so one set = count * 432px.
const TILE_PERIOD = 420 + 12;
const SPEED = 70; // px per second

function Tile({ tile }: { tile: MarqueeTileData }) {
  const Icon = tile.icon;
  return (
    <div
      className="relative flex shrink-0 flex-col justify-between overflow-hidden rounded-2xl border border-white/10 p-7"
      style={{
        width: 420,
        height: 270,
        background:
          'radial-gradient(120% 120% at 0% 0%, rgba(27,165,200,0.18) 0%, rgba(0,103,192,0.06) 40%, #101418 100%)',
      }}
    >
      {/* faint circuit grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            'linear-gradient(#D7E2EA 1px, transparent 1px), linear-gradient(90deg, #D7E2EA 1px, transparent 1px)',
          backgroundSize: '38px 38px',
        }}
      />
      <div className="relative flex items-center justify-between">
        <Icon className="h-12 w-12 text-[#1BA5C8]" strokeWidth={1.5} />
        <span className="text-xs font-light uppercase tracking-[0.2em] text-[#D7E2EA]/50">
          {tile.category}
        </span>
      </div>
      <div className="relative text-[2.4rem] font-semibold uppercase leading-none tracking-tight text-[#EAF2F7]">
        {tile.name}
      </div>
    </div>
  );
}

/**
 * Continuously auto-scrolling row, driven by a CSS keyframe animation (robust to
 * rAF throttling and reduced-motion). The tile set is tripled; the animation
 * translates by exactly one set width so the loop is seamless. `dir` = 1 drifts
 * right, -1 drifts left.
 */
function Row({ tiles, dir }: { tiles: MarqueeTileData[]; dir: 1 | -1 }) {
  const tripled = [...tiles, ...tiles, ...tiles];
  const period = tiles.length * TILE_PERIOD;
  const duration = period / SPEED;

  const style = {
    '--marquee-period': `${period}px`,
    animation: `${dir === 1 ? 'marquee-right' : 'marquee-left'} ${duration}s linear infinite`,
    willChange: 'transform',
  } as CSSProperties;

  return (
    <div className="marquee-track flex gap-3" style={style}>
      {tripled.map((tile, i) => (
        <Tile key={i} tile={tile} />
      ))}
    </div>
  );
}

export default function MarqueeSection() {
  return (
    <section className="flex flex-col gap-3 overflow-hidden bg-[#0C0C0C] pb-10 pt-24 sm:pt-32 md:pt-40">
      <Row tiles={marqueeRowOne} dir={1} />
      <Row tiles={marqueeRowTwo} dir={-1} />
    </section>
  );
}
