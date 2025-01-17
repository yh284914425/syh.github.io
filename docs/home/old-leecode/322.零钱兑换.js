/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 *
 * https://leetcode-cn.com/problems/coin-change/description/
 *
 * algorithms
 * Medium (42.80%)
 * Likes:    1116
 * Dislikes: 0
 * Total Accepted:    192.3K
 * Total Submissions: 449.4K
 * Testcase Example:  '[1,2,5]\n11'
 *
 * 给定不同面额的硬币 coins 和一个总金额
 * amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1。
 * 
 * 你可以认为每种硬币的数量是无限的。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：coins = [1, 2, 5], amount = 11
 * 输出：3 
 * 解释：11 = 5 + 5 + 1
 * 
 * 示例 2：
 * 
 * 
 * 输入：coins = [2], amount = 3
 * 输出：-1
 * 
 * 示例 3：
 * 
 * 
 * 输入：coins = [1], amount = 0
 * 输出：0
 * 
 * 
 * 示例 4：
 * 
 * 
 * 输入：coins = [1], amount = 1
 * 输出：1
 * 
 * 
 * 示例 5：
 * 
 * 
 * 输入：coins = [1], amount = 2
 * 输出：2
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * 1 
 * 0 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {

    let res = dfs(coins, amount, [], []).map(item => item.length)
    return res.length > 0 ? Math.min(...res) : -1
};

console.log(coinChange([1,2,5],100));

function dfs(coins, amount, path, res) {
    if (amount == 0) {
        res.push(JSON.parse(JSON.stringify(path)))
        return res
    }
    // if (amount < 0) {
    //     return res
    // }
    for (let i = 0; i < coins.length; i++) {
        if (amount - coins[i] < 0) {
            continue
        }
        path.push(coins[i])
        dfs(coins, amount - coins[i], path, res)
        path.pop()

    }
    return res
}
// @lc code=end