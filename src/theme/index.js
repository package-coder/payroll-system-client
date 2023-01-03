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
        MuiButton: {
            styleOverrides: {
                containedPrimary: {
                    backgroundColor: '#1d1f22',
                    color: theme.palette.primary.main
                }
            }
        },
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
                    '&.Mui-error': {
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderWidth: '2px',
                            borderStyle: 'solid',
                            borderColor: theme.palette.error.light,
                        },
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                        borderWidth: '2px',
                        borderColor: 'transparent',
                        borderStyle: 'solid'
                    },
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
        MuiTableCell: {
            styleOverrides: {
                root: {
                    border: 0,
                    borderColor: theme.palette.grey[200],
                    padding: '16px 16px 16px 9px',
                    '&.MuiTableCell-head': {
                        padding: '3px 16px 3px 12px',
                        color: theme.palette.grey[400],
                    }
                }
            }
        },
        MuiTableRow: {
            styleOverrides: {
                root: {
                    cursor: 'pointer',
                    '&:last-child .MuiTableCell-body': {
                        borderBottom: 0,
                    },
                }
            }
        },
        MuiDialogTitle: {
            styleOverrides: {
                root: {
                    textAlign: 'center',
                    fontWeight: 'bold',
                    borderBottomWidth: '1px',
                    borderBottomStyle: 'solid',                    
                    borderBottomColor: theme.palette.grey[200],
                    padding: '12px 16px',
                    marginBottom: '16px'
                }
            }
        },
        MuiDialogContent: {
            styleOverrides: {
                root: {
                    padding: '16px'
                }
            }
        },
        MuiDialogActions: {
            styleOverrides: {
                root: {
                    padding: 0
                }
            }
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    color: 'black',
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: theme.palette.grey[300],
                    boxShadow: 'none'
                }
            }
        },
        MuiCardHeader: {
            styleOverrides: {
                title: {
                    fontSize: '1.25rem'
                }
            }
        },
        MuiCardActions: {
            styleOverrides: {
                root: {
                    borderWidth: 0,
                    borderTopWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: theme.palette.divider,
                }
            }
        },
        MuiAutocomplete: {
            styleOverrides: {
                inputRoot: {
                    minWidth: '246px'
                }
            }
        },
        MuiSelect: {
            styleOverrides: {
                select: {
                    minWidth: '202px'
                }
            }
        }
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