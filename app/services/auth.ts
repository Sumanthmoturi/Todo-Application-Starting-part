
export const registerUser = async (data: any) => {
  const response = await fetch('/api/register', {
    method: 'POST',
    body: JSON.stringify(data),
  });
  return response.json();
};

export const loginUser = async (data: any) => {
  const response = await fetch('/api/login', {
    method: 'POST',
    body: JSON.stringify(data),
  });
  return response.json();
};
