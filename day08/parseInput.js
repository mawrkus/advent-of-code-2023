function buildNodes(rawNodes) {
  const nodes = {};

  for (const rawNode of rawNodes) {
    const [, name, L, R] = rawNode.match(/(.+) = \((.+), (.+)\)/);
    nodes[name] = { L, R };
  }

  return nodes;
}

export function parseInput(textInput, log = true) {
  const input = textInput.trim().split("\n");
  const [rawInstructions, ...rawNodes] = input;

  rawNodes.shift();

  const parsed = {
    instructions: rawInstructions.split(""),
    nodes: buildNodes(rawNodes),
  };

  if (log) {
    console.log(parsed);
  }

  return parsed;
}
