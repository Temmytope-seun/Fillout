function findPairs(nums1, nums2, k) {
    let pairs = [];
    let set = new Set(nums2); // Convert nums2 to a set for quick lookup
    
    for (let num of nums1) {
        let complement = k - num;
        if (set.has(complement)) {
            pairs.push([num, complement]);
        }
    }
    
    return pairs;
}

let nums1 = [4, 5, 6, 7, 0, 1];
let nums2 = [3, 9, 10, 11, 12, 19];
let k = 13;

console.log(findPairs(nums1, nums2, k));
