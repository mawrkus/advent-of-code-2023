export function parseInput(textInput, log = true) {
  const [rawWorkflows, rawRatings] = textInput.trim().split('\n\n');

  const parsed = {
    workflows: rawWorkflows.split('\n').reduce((acc, line) => {
      const [, name, rawRules] = line.match(/([^{]+){(.+)}/);

      const rules = rawRules.split(',').map((rawRule) => {
        const [rawCheck, rawDestination = null] = rawRule.split(':');

        if (/([a-z]+)(.)(\d+)/.test(rawCheck)) {
          const [, category, op, rawValue] = rawCheck.match(/([a-z]+)(.)(\d+)/);
          const value = Number(rawValue);

          return {
            check: {
              category,
              op,
              opFn: new Function('n', `return n ${op} ${value};`),
              value,
            },
            destination: rawDestination,
          };
        }

        // default rule
        return {
          check: {
            category: null,
            opFn: () => true,
          },
          destination: rawCheck,
        };
      });

      acc[name] = rules;

      return acc;
    }, {}),
    ratings: rawRatings.split('\n').map((line) => {
      const [, rawRatings] = line.match(/\{(.+)\}/);

      return rawRatings.split(',').reduce((acc, assignment) => {
        const [name, rawValue] = assignment.split('=');

        acc[name] = Number(rawValue);

        return acc;
      }, {});
    }),
  };

  if (log) {
    console.log(parsed.workflows);
    console.log(parsed.ratings);
  }

  return parsed;
}
