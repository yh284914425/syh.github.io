/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 *
 * https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/description/
 *
 * algorithms
 * Medium (56.09%)
 * Likes:    1185
 * Dislikes: 0
 * Total Accepted:    235.5K
 * Total Submissions: 419.6K
 * Testcase Example:  '"23"'
 *
 * 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。
 * 
 * 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
 * 
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：digits = "23"
 * 输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：digits = ""
 * 输出：[]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：digits = "2"
 * 输出：["a","b","c"]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 
 * digits[i] 是范围 ['2', '9'] 的一个数字。
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    let arr = [0, 0,"abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"]
    if (digits=="") {
        return []
    }
    function dfs(digits, start, path, res) {

        if (path.length == digits.length) {
            res.push(path)
            return res
        }

        for (let index = 0; index < arr[digits[start]].length; index++) {
            dfs(digits, start + 1, path + arr[digits[start]][index], res)

        }

        return res
    }
    return dfs(digits, 0, "", [])

};
// @lc code=end