import React from "react";

function NavBar() {
	return (
		<header className="bg-white dark:bg-slate-800 border-b-2 border-slate-200">
			<nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
				<h1 className="text-slate-900 dark:text-white font-serif text-3xl">
					Accro'Fun
				</h1>
				<div className="mx-auto flex flex-row justify-around gap-x-10">
					<a
						className="text-slate-900 dark:text-white border-b-2 border-slate-900 border-solid hover:border-emerald-600 hover:text-emerald-600"
						href="#Accueil"
					>
						Accueil
					</a>
					<a
						className="text-slate-900 dark:text-white border-b-2 border-slate-900 border-solid hover:border-emerald-600 hover:text-emerald-600"
						href="#Parcours"
					>
						Parcours
					</a>
					<a
						className="text-slate-900 dark:text-white border-b-2 border-slate-900 border-solid hover:border-emerald-600 hover:text-emerald-600"
						href="#Tarifs"
					>
						Tarifs & Réservation
					</a>
					<a
						className="text-slate-900 dark:text-white border-b-2 border-slate-900 border-solid hover:border-emerald-600 hover:text-emerald-600"
						href="#Horaires"
					>
						Horaires
					</a>
					<a
						className="text-slate-900 dark:text-white border-b-2 border-slate-900 border-solid hover:border-emerald-600 hover:text-emerald-600"
						href="#Contact"
					>
						Contact
					</a>
				</div>
			</nav>
		</header>
	);
}

export default NavBar;
