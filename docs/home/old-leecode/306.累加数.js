/*
 * @lc app=leetcode.cn id=306 lang=javascript
 *
 * [306] 累加数
 *
 * https://leetcode-cn.com/problems/additive-number/description/
 *
 * algorithms
 * Medium (33.33%)
 * Likes:    146
 * Dislikes: 0
 * Total Accepted:    12.6K
 * Total Submissions: 37.7K
 * Testcase Example:  '"112358"'
 *
 * 累加数是一个字符串，组成它的数字可以形成累加序列。
 * 
 * 一个有效的累加序列必须至少包含 3 个数。除了最开始的两个数以外，字符串中的其他数都等于它之前两个数相加的和。
 * 
 * 给定一个只包含数字 '0'-'9' 的字符串，编写一个算法来判断给定输入是否是累加数。
 * 
 * 说明: 累加序列里的数不会以 0 开头，所以不会出现 1, 2, 03 或者 1, 02, 3 的情况。
 * 
 * 示例 1:
 * 
 * 输入: "112358"
 * 输出: true 
 * 解释: 累加序列为: 1, 1, 2, 3, 5, 8 。1 + 1 = 2, 1 + 2 = 3, 2 + 3 = 5, 3 + 5 = 8
 * 
 * 
 * 示例 2:
 * 
 * 输入: "199100199"
 * 输出: true 
 * 解释: 累加序列为: 1, 99, 100, 199。1 + 99 = 100, 99 + 100 = 199
 * 
 * 进阶:
 * 你如何处理一个溢出的过大的整数输入?
 * 
 */

// @lc code=start
/**
 * @param {string} num
 * @return {boolean}
 */
var isAdditiveNumber = function (num) {


    function backtrace(num, start, count, res) {

        if (start == num.length && count > 2) {
            console.log(res);
            return true
        }

        for (let i = start; i < num.length; i++) {
            let value = num.slice(start, i + 1)
            if (value[0] == "0" && i > start || count >= 2 && parseInt(value) != res[res.length - 1] + res[res.length - 2]) {
                continue
            }
            res.push(parseInt(value))
            if (backtrace(num, i + 1, count + 1, res)) {
                return true
            }
            res.pop()

        }
        return false

    }

    return backtrace(num, 0, 0, [])
};

console.log(isAdditiveNumber("1023"));
// @lc code=end