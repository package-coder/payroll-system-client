import React from 'react'
import PropTypes from "prop-types";
import TableContainer from './TableContainer';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

const TableGrid = (props) => {
    const { 
        columns, 
        data,
        disableHeader,
        disableHover,
        onRowClick
    } = props

  return (
    <Table>
        {
            !disableHeader && (
                <TableHead>
                    <TableRow>
                        {columns.map((column) => (
                        <TableCell key={column.id} align={column.align}>
                            {column.label}
                        </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
            )
        }
        <TableBody>
            {data?.map((row, index) => (
                <TableRow 
                    onClick={() => onRowClick ? onRowClick(row, index) : null}
                    key={index} 
                    hover={!disableHover}
                    sx={{ cursor: disableHover ? 'auto' : 'pointer' }}
                    tabIndex={-1}
                >
                    {columns.map(column => {
                        const value = row[column.id];
                        return (
                            <TableCell
                                key={column.id}
                                align={column.align}
                                padding={column.padding}
                            >
                                {column?.render 
                                    ? column.render(value, row) 
                                    : column?.format 
                                    ? column.format(value)
                                    : value
                                }
                            </TableCell>
                        )
                    })}
                </TableRow>
            ))}
        </TableBody>
    </Table>
  )
}

TableGrid.propTypes = {
    columns: PropTypes.arrayOf(
            PropTypes.objectOf({
                id: PropTypes.string.isRequired,
                label: PropTypes.string.isRequired,
                padding: PropTypes.string,
                render: PropTypes.func,
                format: PropTypes.func
            }).isRequired
        ).isRequired,
    data: PropTypes.array,
}

export default TableGrid