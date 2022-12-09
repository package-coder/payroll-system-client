import { memo } from "react"
import { CssBaseline } from '@mui/material';
import { ThemeProvider as MUIThemeProvider, createTheme, StyledEngineProvider } from '@mui/material/styles';

const themeOptions = {
    palette: { 
        primary: {
            light: '#63ccff',
            main: '#009be5',
            dark: '#006db3',
        },
        secondary: {
            light: '#f4f4f4',
            main: '#c7c7c8',
            dark: '#8e8f91'
        }
    },
    shape: {
        borderRadius: 8,
    },
    components: {
        MuiTab: {
            defaultProps: {
                disableRipple: true,
            },
        },
    },
    mixins: {
        toolbar: {
            minHeight: 48,
        },
    },
}

export let theme = createTheme({
    ...themeOptions,
    typography: {
        fontFamily: 'Inter',
        fontWeightLight: 300,
        fontWeightMedium: 500,
        fontWeightRegular: 400,
        fontWeightBold: 700,
        h1: {
            fontSize: 32,
            fontWeight: 'bold'
        },
        button: {
            fontSize: 14,
            fontWeight: 'medium'
        }
    }
});

theme = {
    ...theme,
    components: {
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    '&:hover': {
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderWidth: '2px',
                            borderStyle: 'solid',
                            borderColor: theme.palette.primary.main,
                        },
                    },
                    '&.Mui-focused': {
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderWidth: '2px',
                            borderStyle: 'solid',
                            borderColor: theme.palette.primary.main,
                        },
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                        border: 'none',  
                    },
                    fontSize: 14,
                    backgroundColor: theme.palette.secondary.light
                }
            }
        },
        MuiDrawer: {
            styleOverrides: {
                paper: {
                    backgroundColor: '#1d1f22',
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                },
                contained: {
                    boxShadow: 'none',
                    '&:active': {
                        boxShadow: 'none',
                    },
                },
            },
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    padding: '5px 3px',
                }
            }
        },
        MuiTabs: {
            styleOverrides: {
                root: {
                    marginLeft: theme.spacing(1),
                },
                indicator: {
                    height: 3,
                    borderTopLeftRadius: 3,
                    borderTopRightRadius: 3,
                    backgroundColor: theme.palette.common.white,
                },
            },
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    margin: '0 16px',
                    minWidth: 0,
                    padding: 0,
                    [theme.breakpoints.up('md')]: {
                        padding: 0,
                        minWidth: 0,
                    },
                },
            },
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    padding: theme.spacing(1),
                },
            },
        },
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    borderRadius: 4,
                },
            },
        },
        MuiDivider: {
            styleOverrides: {
                root: {
                    backgroundColor: 'rgb(255,255,255,0.15)',
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: '#212426',
                },
            },
        },
        MuiListItemButton: {
            styleOverrides: {
                root: {
                    '&.Mui-selected': {
                        color: theme.palette.primary.main,
                    },
                },
            },
        },  
        MuiListItemText: {
            styleOverrides: {
                primary: {
                    fontSize: 14,
                    fontWeight: theme.typography.fontWeightMedium,
                },
            },
        },
        MuiListItemIcon: {
            styleOverrides: {
                root: {
                    color: 'inherit',
                    minWidth: 'auto',
                    marginRight: theme.spacing(2),
                    '& svg': {
                        fontSize: 20,
                    },
                },
            },
        },
        MuiAvatar: {
            styleOverrides: {
                root: {
                    width: 32,
                    height: 32,
                },
            },
        },
    },
};



const ThemeProvider = ({ children }) => {

    
    return (
        <StyledEngineProvider injectFirst>
            <MUIThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </MUIThemeProvider>
        </StyledEngineProvider>
    )
}


export default memo(ThemeProvider)