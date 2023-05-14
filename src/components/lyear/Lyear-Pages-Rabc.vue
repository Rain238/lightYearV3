<template>
<div class="container-fluid">
<div class="row">
 <div class="col-lg-12">
  <div class="card">
   <header class="card-header">
    <div class="card-title">
     设置权限
    </div>
   </header>
   <div class="card-body">
    <form action="#!" method="post">
     <div class="form-group"><label for="example-text-input">角色名称</label> <input class="form-control" type="text" name="role-input" placeholder="角色名称">
     </div>
     <div class="table-responsive">
      <table class="table table-striped">
       <thead>
        <tr>
         <th>
          <div class="form-check"><input class="form-check-input" type="checkbox" value="" id="check-all"> <label class="form-check-label" for="check-all">全选</label>
          </div></th>
        </tr>
       </thead>
       <tbody>
        <tr>
         <td>
          <div class="form-check"><input class="form-check-input checkbox-parent" type="checkbox" name="rules[]" id="roleid-1" dataid="id-1" value="1"> <label class="form-check-label" for="roleid-1">系统管理</label>
          </div></td>
        </tr>
        <tr>
         <td class="ps-lg-4">
          <div class="form-check"><input class="form-check-input checkbox-parent checkbox-child" type="checkbox" name="rules[]" id="roleid-1-5" dataid="id-1-5" value="5"> <label class="form-check-label" for="roleid-1-5">网站设置</label>
          </div></td>
        </tr>
        <tr>
         <td class="ps-lg-4">
          <div class="form-check"><input class="form-check-input checkbox-child" type="checkbox" name="rules[]" id="roleid-1-6" dataid="id-1-6" value="6"> <label class="form-check-label" for="roleid-1-6">配置管理</label>
          </div></td>
        </tr>
        <tr>
         <td class="ps-lg-5">
          <div class="form-check"><input class="form-check-input checkbox-child" type="checkbox" name="rules[]" id="roleid-1-6-20" dataid="id-1-6-20" value="20"> <label class="form-check-label" for="roleid-1-6-20">添加配置</label>
          </div>
          <div class="form-check"><input class="form-check-input checkbox-child" type="checkbox" name="rules[]" id="roleid-1-6-21" dataid="id-1-6-21" value="21"> <label class="form-check-label" for="roleid-1-6-21">编辑配置</label>
          </div>
          <div class="form-check"><input class="form-check-input checkbox-child" type="checkbox" name="rules[]" id="roleid-1-6-44" dataid="id-1-6-44" value="44"> <label class="form-check-label" for="roleid-1-6-44">删除配置</label>
          </div>
          <div class="form-check"><input class="form-check-input checkbox-child" type="checkbox" name="rules[]" id="roleid-1-6-45" dataid="id-1-6-45" value="45"> <label class="form-check-label" for="roleid-1-6-45">禁用/启用配置</label>
          </div>
          <div class="form-check"><input class="form-check-input checkbox-child" type="checkbox" name="rules[]" id="roleid-1-6-46" dataid="id-1-6-46" value="46"> <label class="form-check-label" for="roleid-1-6-46">设置配置值</label>
          </div></td>
        </tr>
        <tr>
         <td class="ps-lg-4">
          <div class="form-check"><input class="form-check-input checkbox-child" type="checkbox" name="rules[]" id="roleid-1-7" dataid="id-1-7" value="7"> <label class="form-check-label" for="roleid-1-7">导航管理</label>
          </div></td>
        </tr>
        <tr>
         <td class="ps-lg-5">
          <div class="form-check"><input class="form-check-input checkbox-child" type="checkbox" name="rules[]" id="roleid-1-7-51" dataid="id-1-7-51" value="51"> <label class="form-check-label" for="roleid-1-7-51">添加导航菜单</label>
          </div>
          <div class="form-check"><input class="form-check-input checkbox-child" type="checkbox" name="rules[]" id="roleid-1-7-52" dataid="id-1-7-52" value="52"> <label class="form-check-label" for="roleid-1-7-52">编辑导航菜单</label>
          </div>
          <div class="form-check"><input class="form-check-input checkbox-child" type="checkbox" name="rules[]" id="roleid-1-7-53" dataid="id-1-7-53" value="53"> <label class="form-check-label" for="roleid-1-7-53">删除导航菜单</label>
          </div></td>
        </tr>
        <tr>
         <td class="ps-lg-4">
          <div class="form-check"><input class="form-check-input checkbox-child" type="checkbox" name="rules[]" id="roleid-1-8" dataid="id-1-8" value="8"> <label class="form-check-label" for="roleid-1-8">栏目管理</label>
          </div></td>
        </tr>
        <tr>
         <td class="ps-lg-5">
          <div class="form-check"><input class="form-check-input checkbox-child" type="checkbox" name="rules[]" id="roleid-1-8-40" dataid="id-1-8-40" value="40"> <label class="form-check-label" for="roleid-1-8-40">添加栏目</label>
          </div>
          <div class="form-check"><input class="form-check-input checkbox-child" type="checkbox" name="rules[]" id="roleid-1-8-41" dataid="id-1-8-41" value="41"> <label class="form-check-label" for="roleid-1-8-41">编辑栏目</label>
          </div>
          <div class="form-check"><input class="form-check-input checkbox-child" type="checkbox" name="rules[]" id="roleid-1-8-42" dataid="id-1-8-42" value="42"> <label class="form-check-label" for="roleid-1-8-42">删除栏目</label>
          </div></td>
        </tr>
        <tr>
         <td class="ps-lg-4">
          <div class="form-check"><input class="form-check-input checkbox-child" type="checkbox" name="rules[]" id="roleid-1-9" dataid="id-1-9" value="9"> <label class="form-check-label" for="roleid-1-9">权限列表</label>
          </div></td>
        </tr>
        <tr>
         <td class="ps-lg-5">
          <div class="form-check"><input class="form-check-input checkbox-child" type="checkbox" name="rules[]" id="roleid-1-9-36" dataid="id-1-9-36" value="36"> <label class="form-check-label" for="roleid-1-9-36">添加规则</label>
          </div>
          <div class="form-check"><input class="form-check-input checkbox-child" type="checkbox" name="rules[]" id="roleid-1-9-37" dataid="id-1-9-37" value="37"> <label class="form-check-label" for="roleid-1-9-37">编辑规则</label>
          </div>
          <div class="form-check"><input class="form-check-input checkbox-child" type="checkbox" name="rules[]" id="roleid-1-9-38" dataid="id-1-9-38" value="38"> <label class="form-check-label" for="roleid-1-9-38">删除规则</label>
          </div>
          <div class="form-check"><input class="form-check-input checkbox-child" type="checkbox" name="rules[]" id="roleid-1-9-39" dataid="id-1-9-39" value="39"> <label class="form-check-label" for="roleid-1-9-39">禁用/启用规则</label>
          </div></td>
        </tr>
        <tr>
         <td class="ps-lg-4">
          <div class="form-check"><input class="form-check-input checkbox-child" type="checkbox" name="rules[]" id="roleid-1-73" dataid="id-1-73" value="73"> <label class="form-check-label" for="roleid-1-73">后台首页</label>
          </div></td>
        </tr>
       </tbody>
      </table>
     </div>
    </form>
   </div>
  </div>
 </div>
</div>
</div>
</template>
<script>
export default {
name: "Lyear-Pages-Rabc"
}
</script>

<style scoped>

</style>
