import { addDoc, collection, db, getDoc, doc } from "../../firebase/config";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useState, useRef } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
const Transaction = () => {
	const { user } = useAuthContext();
	const query = collection(db, `/users/${user.uid}/transaction`);
	const [docs, loading, error] = useCollectionData(query);
	const [showForm, setShowForm] = useState(false);
	console.log(docs);
	const [data, setData] = useState({
		name: "",
		amount: "",
		time: "",
	});
	const handleSubmit = async (e) => {
		e.preventDefault();
		await addDoc(collection(db, `/users/${user.uid}/transaction`), data);
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
												name: e.target.value,
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
				{docs && (
					<div className="h-auto  max-w-xl w-full bg-white rounded-lg p-4 font-bold">
						<ul className="my-4 ">
							{docs &&
								docs.map((item) => {
									return (
										<li
											key={Math.random()}
											className=" mt-4"
											id="1">
											<div className="flex gap-2">
												<div className="w-9/12 h-12 bg-[#e0ebff] rounded-[7px] flex justify-start items-center px-3">
													<span
														className="strike_none
													text-sm ml-4 text-[#5b7a9d]
													font-semibold">
														{item.name}
													</span>
												</div>
												<span className="w-1/4 h-12 bg-[#e0ebff] rounded-[7px] flex justify-center text-sm text-[#5b7a9d] font-semibold items-center ">
													{item.amount}$
												</span>
											</div>
										</li>
									);
								})}
						</ul>
					</div>
				)}
			</div>
		</div>
	);
};

export default Transaction;
