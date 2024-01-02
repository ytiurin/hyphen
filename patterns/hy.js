(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    // AMD. Register as an anonymous module.
    define([], factory);
  } else if (typeof module === "object" && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    // Browser globals (root is window)
    root.hyphenationPatternsHy = factory();
  }
})(this, function () {
  return [
    "01",
    '{"և":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"ա":[{"բ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"գ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"դ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"զ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"թ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"ժ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"լ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"խ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"ծ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"կ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"հ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"ձ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"ղ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"ճ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"մ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"յ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"ն":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"շ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"չ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"պ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"ջ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"ռ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"ս":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"վ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"տ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"ր":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"ց":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"փ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"ք":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}]}],"ե":[{"բ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"գ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"դ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"զ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"թ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"ժ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"լ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"խ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"ծ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"կ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"հ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"ձ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"ղ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"ճ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"մ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"յ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"ն":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"շ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"չ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"պ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"ջ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"ռ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"ս":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"վ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"տ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"ր":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"ց":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"փ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"ք":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}]}],"է":[{"բ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"գ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"դ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"զ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"թ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"ժ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"լ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"խ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"ծ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"կ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"հ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"ձ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"ղ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"ճ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"մ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"յ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"ն":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"շ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"չ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"պ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"ջ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"ռ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"ս":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"վ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"տ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"ր":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"ց":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"փ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"ք":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}]}],"ը":[{"բ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"գ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"դ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"զ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"թ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"ժ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"լ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"խ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"ծ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"կ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"հ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"ձ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"ղ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"ճ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"մ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"յ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"ն":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"շ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"չ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"պ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"ջ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"ռ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"ս":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"վ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"տ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"ր":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"ց":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"փ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"ք":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}]}],"ի":[{"բ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"գ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"դ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"զ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"թ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"ժ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"լ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"խ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"ծ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"կ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"հ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"ձ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"ղ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"ճ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"մ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"յ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"ն":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"շ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"չ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"պ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"ջ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"ռ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"ս":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"վ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"տ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"ր":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"ց":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"փ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"ք":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}]}],"ո":[{"բ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"գ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"դ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"զ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"թ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"ժ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"լ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"խ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"ծ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"կ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"հ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"ձ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"ղ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"ճ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"մ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"յ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"ն":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"շ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"չ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"պ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"ջ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"ռ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"ս":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"վ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"տ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"ր":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"ց":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"փ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"ք":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}]}],"օ":[{"բ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"գ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"դ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"զ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"թ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"ժ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"լ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"խ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"ծ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"կ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"հ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"ձ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"ղ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"ճ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"մ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"յ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"ն":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"շ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"չ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"պ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"ջ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"ռ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"ս":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"վ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"տ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"ր":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"ց":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"փ":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}],"ք":[{"ա":0,"ե":0,"է":0,"ը":0,"ի":0,"ո":0,"օ":0}]}]}',
    []
  ];
});
