function rotate(pattern) {
  const rotatedPattern = Array(pattern[0].length).fill('');

  for (let y = 0; y < pattern.length; y += 1) {
    const line = pattern[y];

    for (let x = 0; x < line.length; x += 1) {
      rotatedPattern[x] += line[x];
    }
  }

  return rotatedPattern;
}

function findHorizontalReflection(pattern, prevTop) {
  for (let y = 0; y < pattern.length - 1; y += 1) {
    if (y === prevTop) {
      continue;
    }

    let bottom = y;
    let top = y + 1;

    while (
      bottom >= 0 &&
      top < pattern.length &&
      pattern[bottom] === pattern[top]
    ) {
      bottom -= 1;
      top += 1;
    }

    if (bottom === -1 || top === pattern.length) {
      return y;
    }
  }

  return null;
}

function findVerticalReflection(pattern, prevLeft) {
  return findHorizontalReflection(rotate(pattern), prevLeft);
}

export function findReflection(pattern, prevTop = null, prevLeft = null) {
  const top = findHorizontalReflection(pattern, prevTop);

  if (top !== null) {
    return { top, left: null };
  }

  const left = findVerticalReflection(pattern, prevLeft);

  if (left !== null) {
    return { top: null, left };
  }

  return { top: null, left: null };
}
