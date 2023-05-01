import styles from './SelectionStepFirst.module.css';

const SelectionStepFirst = () => {
    return (
        <>
            <div className={styles.selection__map_b}>
                    <span>B</span><br></br>block
            </div> 
            <div className={styles.selection__map_a}>
                <span>A</span><br></br>block
            </div>  
        </>
       
    )
}
        
export default SelectionStepFirst;