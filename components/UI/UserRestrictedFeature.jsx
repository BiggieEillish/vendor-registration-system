import { useUserContext } from "../context/UserContext";
import Modal from "./Modal";

export default function UserRestrictedFeature({ children }) {
  const { userStatus } = useUserContext();
  const [isModalOpen, setModalOpen] = useState(false);

  if (userStatus !== "verified") {
    return (
      <>
        <button onClick={() => setModalOpen(true)}>Access Feature</button>
        {isModalOpen && (
          <Modal onClose={() => setModalOpen(false)}>
            <p>You must be verified to access this feature.</p>
          </Modal>
        )}
      </>
    );
  }

  return children;
}