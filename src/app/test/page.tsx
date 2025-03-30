'use client';

const Page = () => {
  const onClick = () => {
    throw new Error('Production testing rollout....');
  };
  return <button onClick={onClick}>Click me</button>;
};

export default Page;
