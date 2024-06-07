export default function PhotoCard({ photo }) {
    return (
      <div className="w-full h-auto p-2">
        <img src={photo} alt="" className="w-full h-auto rounded-lg shadow-lg" />
      </div>
    );
  }
  