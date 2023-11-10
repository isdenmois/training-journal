import { applyAction, deserialize } from '$app/forms';
import { invalidateAll } from '$app/navigation';

export const postAction = async (action: string, body: FormData) => {
  const response = await fetch(`?/${action}`, {
    method: 'POST',
    body,
  });
  const result = deserialize(await response.text());

  if (result.type === 'success') {
    // rerun all `load` functions, following the successful update
    await invalidateAll();
  }

  applyAction(result);

  return result;
};
