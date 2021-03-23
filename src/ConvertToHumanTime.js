export default function convertToHumanTime(duration) {
  const currentTime = new Date(duration);
  return `${currentTime
    .getMinutes()
    .toString()
    .padStart(2, '0')}:${currentTime.getSeconds().toString().padStart(2, '0')}`;
}
