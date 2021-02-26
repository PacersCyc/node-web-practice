const vm = require('vm');

const user = {
  name: '<script>haha</script>'
}

const result = `<h2>${user.name}</h2>`

console.log(vm.runInNewContext('`<h2>${_(user.name)}</h2>`', { 
  user,
  // xss转义函数
  _: function(markup) {
    if (!markup) return;
    return String(markup)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/'/g, '&#39;')
      .replace(/"/g, '&quot;')
  }
}));
