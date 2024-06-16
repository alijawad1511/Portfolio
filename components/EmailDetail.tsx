const EmailDetail = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-6 text-textLight">
      <a href="mailto:jawad.bukhari1511@gmail.com">
        <p className="text-sm rotate-90 w-72 tracking-wide text-textGreen">
          devbuddy.com
        </p>
      </a>
      <div className="w-[2px] h-32 bg-textDark inline-flex"></div>
    </div>
  );
};

export default EmailDetail;
