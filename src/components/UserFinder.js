import { Component } from "react";
import classes from "./UserFinder.module.css";
import Users from "./Users";

const DUMMY_USERS = [
  { id: "u1", name: "Pratik" },
  { id: "u2", name: "Juken" },
  { id: "u3", name: "Bibek" },
  { id: "u4", name: "Anish" },
  { id: "u5", name: "Basanta" },
];

class UserFinder extends Component {
  constructor(props) {
    super(props);
    this.state = { searched: "", filteredUsers: DUMMY_USERS };
  }

  componentDidUpdate(prevProp, prevState) {
    if (prevState.searched !== this.state.searched) {
      this.setState({
        filteredUsers: DUMMY_USERS.filter((user) =>
          user.name.toLowerCase().includes(this.state.searched.toLowerCase())
        ),
      });
    }
  }

  changeHandler = (e) => {
    this.setState({ searched: e.target.value });
  };
  render() {
    return (
      <>
        <div className={classes.finder}>
          <input type="search" onChange={this.changeHandler.bind(this)} />
        </div>
        <Users users={this.state.filteredUsers} />
      </>
    );
  }
}

// const UserFinder = () => {
//   const [searched, setSearched] = useState("");
//   const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//   const changeHandler = (e) => {
//     setSearched(e.target.value);
//   };

//   useEffect(() => {
//     setFilteredUsers(
//       DUMMY_USERS.filter((user) =>
//         user.name.toLowerCase().includes(searched.toLowerCase())
//       )
//     );
//   }, [searched]);

//   return (
//     <>
//       <div className={classes.finder}>
//         <input type="search" onChange={changeHandler} />
//       </div>
//       <Users users={filteredUsers} />
//     </>
//   );
// };

export default UserFinder;
