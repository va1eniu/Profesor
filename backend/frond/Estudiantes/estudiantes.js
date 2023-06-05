import { getEstudiantes } from "./api.js";

addEventListener("DOMContentLoaded", cargarEstudiantes);

async function cargarEstudiantes() {
  const tablaEstudiantes = document.querySelector("#tabla");
  const estudiantes = await getEstudiantes();
  console.log(estudiantes);
  estudiantes.forEach((element) => {
    tablaEstudiantes.innerHTML += `
        
        <tr class = "cards" nombre ="${element.nombre}"
        imagen ="${element.imagen}"
        edad ="${element.edad}"
        promedio ="${element.promedio}"
        nivelCAmpus ="${element.nivelCAmpus}"
        especialidad ="${element.especialidad}"
        direccion ="${element.direccion}"
        celular ="${element.celular}"
        Ser ="${element.Ser}"
        Review ="${element.Review}"
        Skills ="${element.Skills}"
        Asitencia ="${element.Asitencia}"
        ingles ="${element.ingles}"

        >
        <th scope="row" id = "${element.id}">${element.id}</th>
        <td id = "${element.id}">${element.nombre}</td>
        <td id = "${element.id}">${element.especialidad}</td>
        <td id = "${element.id}"><img src="images/${element.imagen}" alt="" id = "${element.id}"></td>
        <td id = "${element.id}" ><button type="button" class="btn btn-info">notas</button> </td>
       </tr>
        
        `;
  });
}

function detalles() {
  const tablaEstudiantes = document.querySelector("#tabla");
  tablaEstudiantes.addEventListener("click", (e) => {
    console.log(e.target);
    if (e.target.getAttribute("id")) {
      const atributos = e.target.getAttribute("id");
      const elemento = document.getElementById(atributos);
      const padre = elemento.parentNode;
      console.log(padre);

      const nombre = padre.getAttribute("nombre");
      const imagen = padre.getAttribute("imagen");
      const edad = padre.getAttribute("edad");
      const promedio = padre.getAttribute("promedio");
      const nivelCAmpus = padre.getAttribute("nivelCAmpus");
      const nivelIngles = padre.getAttribute("nivelIngles");
      const especialidad = padre.getAttribute("especialidad");
      const direccion = padre.getAttribute("direccion");
      const celular = padre.getAttribute("celular");
      const ingles = padre.getAttribute("ingles");
      const Ser = padre.getAttribute("Ser");
      const Review = padre.getAttribute("Review");
      const Skills = padre.getAttribute("Skills");
      const Asitencia = padre.getAttribute("Asitencia");

      const detalles = document.querySelector("#detalles");
      detalles.innerHTML = ``;
      detalles.innerHTML = `
            
            <div class="contanerDetalles">
            <div class="datos">
              <div class="d-flex"><img src="images/${imagen} " alt="" class="m-2">
              <button class="btn btn-danger" style="height: 40px;">eliminar</button></div>
              <h5>nombre:${nombre}</h5>
              <h5>edad:${edad}</h5>
              <h5>promedio:${promedio}</h5>
              <h5>nivel:${nivelCAmpus}</h5>
              <h5>ingles:${nivelIngles}</h5>
              <h5>especialidad:${especialidad}</h5>
              <h5>direccion:${direccion}</h5>
              <h5 style="background-color: antiquewhite;">celular: ${celular} </h5>
             
              
        
            </div>
          </div>
          <div  id="charst1" class="charts"></div>
            
            
            `;
      const getOptionCharts1 = () => {
        let value1 = ingles*1;
        let value2 = Ser*1;
        let value3 = Review*1;
        let value4 = Skills*1;
        let value5 = Asitencia*1;
     

        return {
          tooltip: {
            trigger: "item",
          },
          legend: {
            top: "5%",
            left: "center",
            // doesn't perfectly work with our tricks, disable it
            selectedMode: false,
          },
          series: [
            {
              name: "Access From",
              type: "pie",
              radius: ["40%", "70%"],
              center: ["50%", "70%"],
              // adjust the start angle
              startAngle: 180,
              label: {
                show: true,
                formatter(param) {
                  // correct the percentage
                  return param.name + " (" + param.percent * 2 + "%)";
                },
              },
              data: [
                { value: value1, name: "ingles" },
                { value: value2, name: "Ser" },
                { value: value3, name: "Review" },
                { value: value4, name: "skills" },
                { value: value5, name: "asitencia" },
                {
                  // make an record to fill the bottom 50%
                  value: value1 + value2 + value3+ value4 + value5,
                  itemStyle: {
                    // stop the chart from rendering this piece
                    color: "none",
                    decal: {
                      symbol: "none",
                    },
                  },
                  label: {
                    show: false,
                  },
                },
              ],
            },
          ],
        };
      };

      const chart1 = echarts.init(document.getElementById("charst1"));
      chart1.setOption(getOptionCharts1());
    }
  });
}

detalles();
