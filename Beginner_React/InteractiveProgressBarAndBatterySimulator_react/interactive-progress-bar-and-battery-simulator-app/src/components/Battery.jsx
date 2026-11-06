function Battery({ batteryPercentage }) {
    const boxWidth = 500;
    return (
        <>
            <div
                style={{
                    width: `${boxWidth}px`,
                    height: '70px',
                    backgroundColor: '#C4CF40',
                    padding: '10px',
                    fontSize: '60px'
                }}>
                <div
                    style={{
                        width: `${(batteryPercentage / 100) * boxWidth}px`,
                        height: '70px',
                        backgroundColor: 'green'
                    }}
                >
                    {batteryPercentage}%
                </div>
            </div>
        </>
    )
}

export default Battery;