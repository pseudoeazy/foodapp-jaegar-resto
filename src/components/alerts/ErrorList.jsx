const ErrorList = ({ errors }) => (
  <section>
    <div className="relative items-center w-full px-1 py-1 mx-auto  md:px-3 lg:px-6 max-w-7xl">
      <div className="p-2 border-l-4 border-red-500 rounded-r-xl bg-red-50">
        <div className="flex">
          <div className="ml-3">
            <div className="text-sm text-red-600">
              <ul role="list" className="pl-5 space-y-1 list-disc">
                {errors?.map((message, index) => (
                  <li key={index}>
                    <p>{message}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ErrorList;
