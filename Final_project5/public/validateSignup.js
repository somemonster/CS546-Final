var usernameRegex = /^[a-zA-Z0-9_]{6,16}$/;
var passwordRegex = /^[a-zA-Z0-9_]{8,16}$/;
var emailRegex = /^\w+@\w+(\.\w+)+$/; //format is like "********@163.com"
var firstNameRegex = /[a-zA-Z]$/;
var lastNameRegex = /[a-zA-Z]$/;

     function validateForm() { //定义validateForm方法用于客户端校验
          var flag = true;
          //校验用户名
          var usernameNode = byId("username"); //获得ID值为username的节点对象
          var username = usernameNode.value; //获得usernameNode节点的值，即用户在username文本框内填写的值
          if (!usernameRegex.test(username)) { //验证获得到的值是否符合正则表达式
               byId("username_span").style.color = "red"; //如果不符合，则将ID值为username_span的节点对象内容变为红色
               flag = false; //返回false，不提交
          }

          //校验密码
          var passwordNode = byId("password"); //获得ID值为password的节点对象
          var password = passwordNode.value;
          if (!passwordRegex.test(password)) {
               byId("password_span").style.color = "red";
               flag = false;
          }
          //确认密码
          var rePasswordNode = byId("rePassword"); //获得ID值为rePassword的节点对象
          var rePassword = rePasswordNode.value;
          if (!password == rePassword) {
               byId("rePassword_span").style.color = "red";
               flag = false;
          } else if (!passwordRegex.test(rePassword)) {
               byId("rePassword_span").style.color = "red";
               flag = false;
          } else {
               byId("rePassword_span").style.color = "green";
          }

          //校验邮箱
          var emailNode = byId("Email"); //获得ID值为Email的节点对象
          var email = emailNode.value;
          if (!emailRegex.test(email)) {
               byId("Email_span").style.color = "red";
               flag = false;
          }
          //校验姓名
          var firstNameNode = byId("firstName"); //获得ID值为firstName的节点对象
          var firstName = firstNameNode.value;
          if (!firstNameRegex.test(firstName)) {
               byId("firstName_span").style.color = "red";
               flag = false;
          }

          var lastNameNode = byId("lastName"); //获得ID值为lastName的节点对象
          var lastName = lastNameNode.value;
          if (!lastNameRegex.test(lastName)) {
               byId("lastName_span").style.color = "red";
               flag = false;
          }
          return flag;
     };

     function byId(id) { //自定义方法，用于获取传递过来的ID值对应的节点对象
          return document.getElementById(id);
     };

     function checkUsername(node) { //当鼠标离开节点时调用此方法，验证节点内容是否符合注册规范
          //校验用户名
          var username = node.value; //得到传递过来的节点对象的值
          if (!usernameRegex.test(username)) { //验证是否符合节点对应的正则表达式
               byId("username_span").style.color = "red"; //不符合，相应内容变成红色
          } else {
               byId("username_span").style.color = "green"; //符合，相应内容变成绿色
          }
     };

     function checkPassword(node) { //当鼠标离开节点时调用此方法，验证节点内容是否符合注册规范
          //校验密码
          var password = node.value;
          //alert("111");
          if (!passwordRegex.test(password)) {
               byId("password_span").style.color = "red";
          } else {
               byId("password_span").style.color = "green";
          }
     };

     function checkRePassword(node) { //当鼠标离开节点时调用此方法，验证节点内容是否符合注册规范
          //确认密码				
          var rePassword = node.value;
          var password = byId("password").value;
          //alert(repassword+"***"+password);			
          if (!password == rePassword) {
               byId("rePassword_span").style.color = "red";
          } else if (!passwordRegex.test(rePassword)) {
               byId("rePassword_span").style.color = "red";
          } else {
               byId("rePassword_span").style.color = "green";
          }
     };

     function checkEmail(node) { //当鼠标离开节点时调用此方法，验证节点内容是否符合注册规范
          //校验邮箱
          var email = node.value;
          if (!emailRegex.test(email)) {
               byId("Email_span").style.color = "red";
          } else {
               byId("Email_span").style.color = "green";
          }
     };

     function checkFirstName(node) { //当鼠标离开节点时调用此方法，验证节点内容是否符合注册规范
          var firstName = node.value;
          if (!firstNameRegex.test(firstName)) {
               byId("firstName_span").style.color = "red";
          } else {
               byId("firstName_span").style.color = "green";
          }
     };

     function checkLastName(node) { //当鼠标离开节点时调用此方法，验证节点内容是否符合注册规范
          var lastName = node.value;
          if (!lastNameRegex.test(lastName)) {
               byId("lastName_span").style.color = "red";
          } else {
               byId("lastName_span").style.color = "green";
          }
     };
