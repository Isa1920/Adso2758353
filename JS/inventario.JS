let listaproducto = [];

const objproducto = {
    codigo: '',
    fecha: '',
    nombredelproducto: '',
    recetario: '',
    unidades: '',
};

const codigo2 = document.querySelector('#codigo');
const fecha2 = document.querySelector('#fecha');
const nombredelproducto2 = document.querySelector('#nombredelproducto');
const recetario2 = document.querySelector('#recetario');
const unidades2 = document.querySelector('#unidades');

const formulario = document.querySelector(".formulario");
const divproducto = document.querySelector('.div-producto'); 

formulario.addEventListener('submit', validarformulario);

function validarformulario(e) {
    e.preventDefault(); // Estaba mal escrito como 'preventDefaul()'

    // Corregir la validación del campo 'unidades'
    if (codigo2.value === '' || fecha2.value === '' || nombredelproducto2.value === '' || recetario2.value === '' || unidades2.value === '') {
        alert('Todos los campos se deben llenar');
        return;
    }

    objproducto.codigo = codigo2.value;
    objproducto.fecha = fecha2.value;
    objproducto.nombredelproducto = nombredelproducto2.value;
    objproducto.recetario = recetario2.value;
    objproducto.unidades = unidades2.value;

    agregarproducto();
}

function agregarproducto() {
    listaproducto.push({ ...objproducto });
    mostrarproducto();

    formulario.reset();
    limpiarobjeto();
}

function limpiarobjeto() {
    objproducto.codigo = '';
    objproducto.fecha = '';
    objproducto.nombredelproducto = '';
    objproducto.recetario = '';
    objproducto.unidades = '';
}

function mostrarproducto() {
    divproducto.innerHTML = ''; // Limpia el contenedor antes de mostrar los productos

    listaproducto.forEach(producto => {
        const { codigo, fecha, nombredelproducto, recetario, unidades } = producto;

        const parrafo = document.createElement('P');
        parrafo.textContent = `${codigo} - ${fecha} - ${nombredelproducto} - ${recetario} - ${unidades}`;
        parrafo.dataset.codigo = codigo;

        // Botón para editar
        const editarboton = document.createElement('button');
        editarboton.onclick = () => cargarproducto(producto);
        editarboton.textContent = 'Editar';
        editarboton.classList.add('boton', 'btn-editar');
        parrafo.appendChild(editarboton);

        // Botón para eliminar
        const eliminarboton = document.createElement('button');
        eliminarboton.onclick = () => eliminarproducto(codigo);
        eliminarboton.textContent = 'Eliminar';
        eliminarboton.classList.add('boton', 'btn-eliminar');
        parrafo.appendChild(eliminarboton);

        divproducto.appendChild(parrafo);
    });
}

function cargarproducto(producto) {
    const { codigo, fecha, nombredelproducto, recetario, unidades } = producto;

   
    codigo2.value = codigo;
    fecha2.value = fecha;
    nombredelproducto2.value = nombredelproducto;
    recetario2.value = recetario;
    unidades2.value = unidades;

    // Eliminar el producto actual para luego agregarlo actualizado
    eliminarproducto(codigo);
}

function eliminarproducto(codigo) {
    listaproducto = listaproducto.filter(producto => producto.codigo !== codigo);
    mostrarproducto(); // Refresca la lista de productos después de eliminar
}



