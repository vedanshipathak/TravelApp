import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        padding: theme.spacing(1)
        // Add other container styles as needed
    },
    controls: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: theme.spacing(2),
        // Add other control styles as needed
    },
    formControl: {
        minWidth: 120,
        marginRight: theme.spacing(2),
         marginBottom: '10px'
        // Add other form control styles as needed
    },
    scrollContainer: {
        maxHeight: '400px', // Set the max height for scrolling
        overflowY: 'auto',
        // Add other scroll container styles as needed
    },
    list: {
        // Add list styles as needed
    },
}));

export default useStyles;
