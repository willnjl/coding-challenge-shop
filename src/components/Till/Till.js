import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableFooter from "@material-ui/core/TableFooter";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const ccFormat = (price) => {
  return price > 0 ? `£ ${price.toFixed(2)}` : "-";
};

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function Till({ cart }) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={"till shadow--4"}>
        <TableContainer component={Paper}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell scope={"col"} align={"center"}>
                  Product
                </TableCell>
                <TableCell scope={"col"} align={"center"}>
                  Price
                </TableCell>
                <TableCell scope={"col"} align={"center"}>
                  Qty
                </TableCell>
                <TableCell scope={"col"} align={"center"}>
                  Discount
                </TableCell>
                <TableCell scope={"col"} align={"center"}>
                  Total
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cart.cart.map((item) => {
                return (
                  <TableRow>
                    <TableCell scope={"row"} align={"center"}>
                      {item.name}
                    </TableCell>
                    <TableCell align={"center"}>
                      {ccFormat(item.price)}
                    </TableCell>
                    <TableCell align={"center"}>{item.quantity}</TableCell>
                    <TableCell align={"center"}>
                      {ccFormat(item.discount)}
                    </TableCell>
                    <TableCell align={"center"}>
                      {ccFormat(item.price * item.quantity - item.discount)}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={3} />
                <TableCell size={"small"}>Subtotal</TableCell>
                <TableCell>{ccFormat(cart.subtotal)}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={3} />
                <TableCell size={"small"}>Discount</TableCell>
                <TableCell>{ccFormat(cart.discount)}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={3} />
                <TableCell size={"medium"} variant={"head"}>
                  Total
                </TableCell>
                <TableCell size={"medium"} variant={"head"}>
                  {ccFormat(cart.total)}
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </div>
    </React.Fragment>
  );
}

//  <TableHead>
//         <TableRow>
//           <TableCell align={"center"} align="center" colSpan={3}>
//             Details
//           </TableCell>
//           <TableCell align={"center"} >Price</TableCell>
//         </TableRow>
//         <TableRow>
//           <TableCell align={"center"}>Desc</TableCell>
//           <TableCell align={"center"} >Qty.</TableCell>
//           <TableCell align={"center"} >Unit</TableCell>
//           <TableCell align={"center"} >Sum</TableCell>
//         </TableRow>
//       </TableHead>
//       <TableBody>
//         {rows.map((row) => (
//           <TableRow key={row.desc}>
//             <TableCell align={"center"}>{row.desc}</TableCell>
//             <TableCell align={"center"} >{row.qty}</TableCell>
//             <TableCell align={"center"} >{row.unit}</TableCell>
//             <TableCell align={"center"} >{ccyFormat(row.price)}</TableCell>
//           </TableRow>
//         ))}

//         <TableRow>
//           <TableCell align={"center"} rowSpan={3} />
//           <TableCell align={"center"} colSpan={2}>Subtotal</TableCell>
//           <TableCell align={"center"} >{ccyFormat(invoiceSubtotal)}</TableCell>
//         </TableRow>
//         <TableRow>
//           <TableCell align={"center"}>Tax</TableCell>
//           <TableCell align={"center"} >{`${(TAX_RATE * 100).toFixed(
//             0
//           )} %`}</TableCell>
//           <TableCell align={"center"} >{ccyFormat(invoiceTaxes)}</TableCell>
//         </TableRow>
//         <TableRow>
//           <TableCell align={"center"} colSpan={2}>Total</TableCell>
//           <TableCell align={"center"} >{ccyFormat(invoiceTotal)}</TableCell>
//         </TableRow>
//       </TableBody>

// <div class="till">
//   <table class="table">
//     <thead class="head">
//       <tr>
//         <th scope="col">Product</th>
//         <th scope="col">Price</th>
//         <th scope="col">Quantity</th>
//         <th scope="col">Cost</th>
//         <th scope="col">Saving</th>
//         <th scope="col">Total</th>
//       </tr>
//     </thead>
//     <tbody>
//       <tr></tr>
//       {cart.cart.map((item) => {
//         const { name, price, quantity, discount } = item;
//         return (
//           <tr>
//             <th scope="row">{name}</th>
//             <td>{convertToCurrency(price)}</td>
//             <td>{quantity}</td>
//             <td>{convertToCurrency(price * quantity)}</td>
//             <td>{convertToCurrency(discount)}</td>
//             <td>{convertToCurrency(price * quantity - discount)}</td>
//           </tr>
//         );
//       })}
//     </tbody>
//   </table>
//   <table class="sum">
//     <tbody>
//       <tr>
//         <th scope={"row"}>subtotal</th>
//         <td>{"£" + cart.subtotal}</td>
//       </tr>
//       <tr>
//         <th scope={"row"}>Total</th>
//         <td>{"£" + cart.total}</td>
//       </tr>
//       <tr>
//         <th scope={"row"}>Saving</th>
//         <td>{"£" + cart.discount}</td>
//       </tr>
//     </tbody>
//   </table>
// </div>
