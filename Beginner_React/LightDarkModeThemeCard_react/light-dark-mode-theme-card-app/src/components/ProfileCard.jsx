function ProfileCard({ isDark }) {
    return (
        <>
            <div style={{
                width: '150px',
                height: '150px',
                backgroundColor: `${isDark ? 'black' : 'greenyellow'}`
            }}>
                <div
                    style={{ color: `${isDark ? 'white' : 'black'}` }}>
                    Hello - {isDark ? "Darkness" : "Light"}
                </div>
            </div>
        </>
    )
}

export default ProfileCard;