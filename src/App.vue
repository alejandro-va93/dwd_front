<template>
  <div class="mx-auto" style="max-width: 90% !important">
    <button type="button" @click="_add" class="btn btn-success d-flex">
      Crear
    </button>
    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Fecha</th>
            <th scope="col">Hora</th>
            <th scope="col">Teléfono</th>
            <th scope="col">Email</th>
            <th scope="col">Acción</th>
          </tr>
        </thead>
        <tbody>
          <!-- repeat -->
          <tr>
            <th scope="row">1</th>
            <td scope="col">Nombre</td>
            <td scope="col">Apellido</td>
            <td scope="col">Fecha</td>
            <td scope="col">Hora</td>
            <td scope="col">Teléfono</td>
            <td scope="col">Email</td>
            <td scope="col">
              <div class="d-flex">
                <button type="button" class="btn btn-primary mx-1">
                  Editar
                </button>
                <button
                  @click="_delete"
                  type="button"
                  class="btn btn-danger mx-1"
                >
                  Eliminar
                </button>
              </div>
            </td>
          </tr>
          <!-- end repeat -->
          <tr>
            <th scope="row"></th>
            <td scope="col">
              <input class="w60 text-center" />
            </td>
            <td scope="col"><input class="w60 text-center" /></td>
            <td scope="col"><input class="w60 text-center" /></td>
            <td scope="col"><input class="w60 text-center" /></td>
            <td scope="col"><input class="w60 text-center" /></td>
            <td scope="col"><input class="w60 text-center" /></td>
            <td scope="col">
              <button type="button" @click="_add" class="btn btn-success">
                Agregar
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";

export default {
  name: "App",
  components: {},
  methods: {
    greet() {
      console.log("greetings");
    },
    _add() {
      Swal.fire({
        title: "Multiple inputs",
        html:
          '<input @click="greet" placeholder="asd" id="swal-input1" class="swal2-input">' +
          '<input id="swal-input2" class="swal2-input">' +
          '<input id="swal-input3" class="swal2-input">' +
          '<input id="swal-input4" class="swal2-input">' +
          '<input id="swal-input5" class="swal2-input">' +
          '<input id="swal-input6" class="swal2-input">',
        focusConfirm: false,
        preConfirm: () => {
          return [
            document.getElementById("swal-input1").value,
            document.getElementById("swal-input2").value,
            document.getElementById("swal-input3").value,
            document.getElementById("swal-input4").value,
            document.getElementById("swal-input5").value,
            document.getElementById("swal-input6").value,
          ];
        },
      });
    },
    _delete() {
      Swal.fire({
        title: "Error!",
        text: "Do you want to continue",
        icon: "error",
        confirmButtonText: "Cool",
      });
    },
  },
};
</script>

<style>
.w60 {
  max-width: 60% !important;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
