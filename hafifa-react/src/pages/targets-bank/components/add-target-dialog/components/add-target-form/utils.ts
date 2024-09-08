export const isValidTargetName = (targetName: string) => {
  const regex = /^[\u0590-\u05FF]{4,10}$/;

  return regex.test(targetName);
};
