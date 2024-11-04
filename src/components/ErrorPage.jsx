const ErrorPage = () => {
    return (
        <div class="flex items-center justify-center h-screen bg-gray-100">
            <div class="text-center">
                <h1 class="text-6xl font-bold text-gray-800">404</h1>
                <p class="mt-4 text-2xl text-gray-600">Oops! Page Not Found</p>
                <p class="mt-2 text-gray-500">The page you are looking for does not exist.</p>
                <a href="/" class="mt-6 inline-block px-4 py-2 text-white bg-[#9538E2] rounded hover:bg-[#8336c2] transition">Go to Homepage</a>
            </div>
        </div>
    );
};

export default ErrorPage;