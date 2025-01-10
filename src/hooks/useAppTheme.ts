import {useTheme} from 'react-native-paper';
import {AppTheme} from '../config/rnPaper';

export const useAppTheme = () => useTheme<AppTheme>();
