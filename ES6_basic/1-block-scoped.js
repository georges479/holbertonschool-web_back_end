export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    // Using const to declare task and task2 inside the block
    const task = true;
    const task2 = false;
  }

  return [task, task2];
}
