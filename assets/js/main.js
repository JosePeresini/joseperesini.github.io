const headerNav = document.querySelector(".header__nav");
const headerMenu = document.querySelector(".header__menu");
const works = document.querySelector(".works");

const headerLinks = [
	{ name: "Sobre mí", href: "#about" },
	{ name: "Contacto", href: "#footer" },
];

const worksData = [
	{
		title: "Pizzería Mamma Mía",
		description:
			"Es un sistema de autenticación con formularios de registro y login. El registro asegura que el email, contraseña y su confirmación sean válidos, mientras que el login verifica las credenciales, proporcionando un acceso seguro y eficiente a la aplicación.",
		src: "./assets/imgs/projects/01-pizzeria-mamma-mia.png",
		web: "https://pizzeriamammamia.joseperesini.com/",
	},
	{
		title: "Conversor de Moneda",
		description:
			"Es una convertidor que permite transformar pesos chilenos a otras monedas o divisas, actualizando automáticamente los valores y proporcionando gráficos para visualizar las conversiones.",
		src: "./assets/imgs/projects/converter-money.png",
		web: "https://todolist.joseperesini.com",
	},
	{
		title: "Lista de Tareas",
		description:
			"Es una herramienta para gestionar actividades diarias donde puedes añadir tareas mediante un formulario, contabilizar el total de añadidas o eliminadas, marcar como completadas o suprimir una tarea al hacer clic en un botón.",
		src: "./assets/imgs/projects/todo-list.png",
		web: "https://moneyconverterch.joseperesini.com",
	},
];

let templateLinks = "";
let templateWorks = "";

for (let link of headerLinks) {
	templateLinks += `<a href="${link.href}" class="header__a">${link.name}</a>`;
}

for (let work of worksData) {
	let target = "_blank";

	templateWorks += `
                    <article class="works__article">
                        <header class="works__header">
                            <h3 class="works__h3">${work.title}</h3>
                            <p class="works__p">${work.description}</p>
                        </header>
                        <figure class="works__figure">
                            <img
                                src="${work.src}"
                                alt="${work.title}"
                                class="works__img"
                            />
                            <figcaption class="works__figcaption">
                                <a href="${work.web}" target="${target}" class="works__a">WEB</a>
                            </figcaption>
                        </figure>   
                    </article>
					<hr class="works__hr" />
    `;
}

headerNav.innerHTML = templateLinks;
works.innerHTML = templateWorks;

headerMenu.addEventListener("click", () => {
	headerNav.classList.toggle("menu--open");
});
