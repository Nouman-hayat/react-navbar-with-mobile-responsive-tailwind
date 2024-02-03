import React, { useState } from "react";
import { Link } from "react-router-dom";

import Button from "../Button";
import NavLinks from "./NavLinks";
import { data } from "./menudata";

const Navbar = () => {
	const [open, setOpen] = useState(false);
	return (
		<nav className="bg-white">
			<div className="flex items-center font-medium justify-around">
				<div className="z-50 p-5 md:w-auto w-full flex justify-between">
					<Link to="/" className="text-[#18C5FF] text-[30px] font-bold">
						Alt Coding{" "}
					</Link>
					<div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
						<ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
					</div>
				</div>
				<ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins]">
					{data.map((i) => {
						return (
							<li>
								<Link to={i.Link} className="py-7 px-3 inline-block">
									{i.name}
								</Link>
							</li>
						);
					})}

					{/* <NavLinks /> */}
				</ul>
				<div className="md:block hidden">
					<Button />
				</div>
				{/* Mobile nav */}
				<ul
					className={`
        md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
				>
					{data.map((i) => {
						return (
							<li>
								<Link to={i.Link} className="py-7 px-3 inline-block">
									{i.name}
								</Link>
							</li>
						);
					})}
					{/* <NavLinks /> */}
					<div className="py-5">
						<Button />
					</div>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
