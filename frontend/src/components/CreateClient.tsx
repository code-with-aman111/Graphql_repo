import { useState } from "react";
import { useCreateuser } from "../hooks/useCreateuser";
import { useNavigate } from "react-router-dom";

interface Credentials {
  name: string;
  email: string;
  phone: string;
}

const CreateClient = (): JSX.Element => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState<Credentials>({
    name: "",
    email: "",
    phone: "",
  });
  const { mutate: createuser } = useCreateuser();
  const handleInput = (e: React.FormEvent) => {
    e.preventDefault();
    createuser(credentials, {
      onSuccess: () => {
        navigate("/clientdata");
      },
    });
  };
  return (
    <>
      <form onSubmit={handleInput}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={credentials.name}
            onChange={(e) =>
              setCredentials({ ...credentials, name: e.target.value })
            }
          />
        </label>
        <br />

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={credentials.email}
            onChange={(e) =>
              setCredentials({ ...credentials, email: e.target.value })
            }
          />
        </label>
        <br />

        <label>
          Phone:
          <input
            type="tel"
            name="phone"
            value={credentials.phone}
            onChange={(e) =>
              setCredentials({ ...credentials, phone: e.target.value })
            }
          />
        </label>
        <button type="submit">submit</button>
      </form>
    </>
  );
};

export default CreateClient;
