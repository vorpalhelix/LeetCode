function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, {idx: number}>()

for (let i = 0; i < nums.length; i++) {
// calculate difference between target and current num
const num = target - nums[i]
// get part from map if exist
const part = map.get(num)

if (part) {
  // return indices of previous num calculation and current
  return [part.idx, i]
}
// if no set current num and difference with index
map.set(nums[i], { idx: i })
}
}