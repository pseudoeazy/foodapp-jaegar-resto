import { Cancel } from "components/icons";

const ErrorMessage = ({ error }) => (
  <section>
    <div className="relative items-center w-full px-1 py-1 mx-auto  md:px-3 lg:px-6 max-w-7xl">
      <div className="p-2 border-l-4 border-red-500  bg-red-50">
        <div className="flex">
          <div className="flex-shrink-0">
            <Cancel />
          </div>
          <div className="ml-3">
            <div className="text-sm text-red-600">
              <p>{error}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ErrorMessage;
