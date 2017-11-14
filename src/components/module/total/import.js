
// 指定加载
//export {foo,bar as baa} from './export'
// 等同于
/*import {foo,bar} from './export.js'
export {foo,bar}
*/

// 整体加载
//export * from './export'

// 默认接口
import {foo,bar} from './export'
export default foo
//export {foo} from './export'
