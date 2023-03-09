import { addDoc, collection, db, getDoc, doc } from "../../firebase/config";
import { useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import { async } from "@firebase/util";
const Transaction = () => {
	const { user } = useAuthContext();
	const addDocument = async (array) => {
		try {
			await addDoc(collection(db, `tr${user.uid}`), array);
		} catch (err) {
			console.log(err);
		}
	};
	const getDoc = async();

	const [showForm, setShowForm] = useState(false);
	console.log(user.uid);
	const [data, setData] = useState({
		transaction: "",
		amount: "",
		time: "",
	});
	let array = [];
	const handleSubmit = (e) => {
		e.preventDefault();
		array.push(data);
		addDocument({ id: user.uid, ...data });
	};
	return (
		<div className="bg-[#cbd7e3] ">
			<div className="flex flex-col pt-[290px] items-center min-h-screen relative mx-auto max-w-screen-lg">
				{!showForm && (
					<button
						onClick={() => {
							setShowForm(!showForm);
						}}
						className="z-[2] absolute top-4 right-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
						Add Transaction
					</button>
				)}
				{showForm && (
					<button
						onClick={() => {
							setShowForm(!showForm);
						}}
						className="z-[2]  absolute top-4 right-4 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
						Cancel
					</button>
				)}
				{showForm && (
					<div className="overflow-hidden absolute top-[60px] right-4 ">
						<form
							onSubmit={handleSubmit}
							className={` z-0 mb-4 h-auto  max-w-sm w-full bg-white rounded-lg p-4  duration-300`}>
							<div className="flex flex-col gap-y-5 mt-4">
								<input
									onChange={(e) => {
										setData((prev) => {
											return {
												...prev,
												transaction: e.target.value,
											};
										});
									}}
									className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker outline-none"
									placeholder="Transaction"
									required
								/>
								<input
									onChange={(e) => {
										setData((prev) => {
											return {
												...prev,
												amount: e.target.value,
											};
										});
									}}
									required
									className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker outline-none"
									placeholder="Amount"
									type={"number"}
								/>
								<button
									type="submit"
									className=" text-white bg-violet-700 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800">
									Add
								</button>
							</div>
						</form>
					</div>
				)}
				<div className="h-auto  max-w-xl w-full bg-white rounded-lg p-4 font-bold">
					<div className="mt-3 text-sm text-[#8ea6c8] flex justify-between items-center">
						<p className="set_date">Thursday 28 May</p>
						<p className="set_time">8:00 AM</p>
					</div>
					<p className="text-xl  mt-2 text-[#063c76] ">To-do List</p>
					<div className="w-full mt-4 flex text-sm flex-col text-center justify-center ">
						<div className=" px-[15px] flex justify-between text-center items-center ">
							<p>S</p>
							<p>M</p>
							<p>T</p>
							<p>W</p>
							<p>T</p>
							<p>F</p>
							<p>S</p>
						</div>
						<div className="w-full pl-1 flex justify-between text-center items-center">
							<span className="h-7 w-7 rounded-full cursor-pointer transition-all hover:bg-[#063c76] hover:text-white bg-[#fff] flex justify-center items-center">
								<p>24</p>
							</span>
							<span className="h-7 w-7 rounded-full cursor-pointer transition-all hover:bg-[#063c76] hover:text-white bg-[#fff] flex justify-center items-center">
								<p>25</p>
							</span>
							<span className="h-7 w-7 rounded-full cursor-pointer transition-all hover:bg-[#063c76] hover:text-white bg-[#fff] flex justify-center items-center">
								<p>26</p>
							</span>
							<span className="h-7 w-7 rounded-full cursor-pointer transition-all hover:bg-[#063c76] hover:text-white bg-[#fff] flex justify-center items-center">
								<p>27</p>
							</span>
							<span className="h-7 w-7 rounded-full cursor-pointer transition-all hover:bg-[#063c76] hover:text-white bg-[#fff] flex justify-center items-center">
								<p>28</p>
							</span>
							<span className="h-7 w-7 rounded-full cursor-pointer transition-all hover:bg-[#063c76] hover:text-white bg-[#fff] flex justify-center items-center">
								<p>29</p>
							</span>
							<span className="h-7 w-7 rounded-full cursor-pointer transition-all hover:bg-[#063c76] hover:text-white bg-[#fff] flex justify-center items-center">
								<p>30</p>
							</span>
						</div>
					</div>
					<ul className="my-4 ">
						<li className=" mt-4" id="1">
							<div className="flex gap-2">
								<div className="w-9/12 h-12 bg-[#e0ebff] rounded-[7px] flex justify-start items-center px-3">
									<span
										id="check1"
										className=" w-7 h-7 bg-white rounded-full border border-white transition-all cursor-pointer hover:border-[#36d344] flex justify-center items-center">
										<i className="text-white fa fa-check"></i>
									</span>
									<strike
										id="strike1"
										className="strike_none text-sm ml-4 text-[#5b7a9d] font-semibold">
										take out the trash
									</strike>
								</div>
								<span className="w-1/4 h-12 bg-[#e0ebff] rounded-[7px] flex justify-center text-sm text-[#5b7a9d] font-semibold items-center ">
									9:00 AM
								</span>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Transaction;
