import { IoBarChartSharp } from "react-icons/io5";
//import { MdQueryStats } from "react-icons/md";
import { FaWpforms } from "react-icons/fa";
import { ImProfile } from "react-icons/im";

const links = [
  {
    id: 1,
    text: "User information and guidance",
    path: "/guidance",
    icon: <FaWpforms />,
  },
  {
    id: 2,
    text: "Application statistics",
    path: "/",
    icon: <IoBarChartSharp />,
  },
  //{ id: 3, text: "all applications", path: "all-jobs", icon: <MdQueryStats /> },
  { id: 3, text: "Apply your passport", path: "apply", icon: <FaWpforms /> },
  { id: 4, text: "profile", path: "profile", icon: <ImProfile /> },
  { id: 5, text: "Resources and accessories", path: "resources", icon: <ImProfile /> },
];

export default links;
