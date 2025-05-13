// Artists component
function Artists() {
    return (
      <section aria-label="Artists" className="mb-4">
        <h2 className="text-white text-lg sm:text-xl font-semibold my-4">
          Artists
        </h2>
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-center text-center text-xs sm:text-sm">
            <img
              alt="Artist Savi Kahlon wearing red shirt on orange background circular image"
              className="rounded-full w-12 h-12 sm:w-16 sm:h-16 object-cover mb-2"
              height="64"
              src="https://storage.googleapis.com/a1aa/image/33e3fa44-c462-4d6b-6772-4e702ffd5850.jpg"
              width="64"
            />
            <div className="text-white text-xs sm:text-sm">
              Savi Kahlon
            </div>
          </div>
        </div>
      </section>
    );
  }

export default Artists;