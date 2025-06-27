import Card from './Card'

const Posts = ({ blogs }) => {
    return (
        <div className=''>
            <h1 className="text-2xl font-bold mb-6">Posts</h1>
            {blogs.length === 0 && <p>No blogs yet.</p>}
            <div className='flex flex-col'>
                {blogs.map((b, idx) => (
                    <Card key={idx} b={b} />
                ))}
            </div>

        </div>
    )
}

export default Posts