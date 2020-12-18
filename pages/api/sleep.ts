const DEFAULT_SLEEP = 1000;

export default function sleep(ms: number = DEFAULT_SLEEP) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
