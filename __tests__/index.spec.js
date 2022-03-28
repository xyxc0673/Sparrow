import { drawRedRect } from '../src';

describe('drawRedRect', () => {
  it('should create a red rectangle', () => {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', 400);
    document.body.appendChild(svg);
    drawRedRect(svg);
    expect(svg.getElementsByTagName('rect').length).toBe(1);
  });
});
